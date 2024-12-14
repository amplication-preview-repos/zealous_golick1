using ComicService.APIs;
using ComicService.APIs.Common;
using ComicService.APIs.Dtos;
using ComicService.APIs.Errors;
using ComicService.APIs.Extensions;
using ComicService.Infrastructure;
using ComicService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace ComicService.APIs;

public abstract class ComicsServiceBase : IComicsService
{
    protected readonly ComicServiceDbContext _context;

    public ComicsServiceBase(ComicServiceDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Create one Comic
    /// </summary>
    public async Task<Comic> CreateComic(ComicCreateInput createDto)
    {
        var comic = new ComicDbModel
        {
            Cover = createDto.Cover,
            CreatedAt = createDto.CreatedAt,
            Genres = createDto.Genres,
            Status = createDto.Status,
            Summary = createDto.Summary,
            Tags = createDto.Tags,
            Title = createDto.Title,
            UpdatedAt = createDto.UpdatedAt
        };

        if (createDto.Id != null)
        {
            comic.Id = createDto.Id;
        }
        if (createDto.Chapters != null)
        {
            comic.Chapters = await _context
                .Chapters.Where(chapter =>
                    createDto.Chapters.Select(t => t.Id).Contains(chapter.Id)
                )
                .ToListAsync();
        }

        _context.Comics.Add(comic);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<ComicDbModel>(comic.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    /// <summary>
    /// Delete one Comic
    /// </summary>
    public async Task DeleteComic(ComicWhereUniqueInput uniqueId)
    {
        var comic = await _context.Comics.FindAsync(uniqueId.Id);
        if (comic == null)
        {
            throw new NotFoundException();
        }

        _context.Comics.Remove(comic);
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find many Comics
    /// </summary>
    public async Task<List<Comic>> Comics(ComicFindManyArgs findManyArgs)
    {
        var comics = await _context
            .Comics.Include(x => x.Chapters)
            .ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();
        return comics.ConvertAll(comic => comic.ToDto());
    }

    /// <summary>
    /// Meta data about Comic records
    /// </summary>
    public async Task<MetadataDto> ComicsMeta(ComicFindManyArgs findManyArgs)
    {
        var count = await _context.Comics.ApplyWhere(findManyArgs.Where).CountAsync();

        return new MetadataDto { Count = count };
    }

    /// <summary>
    /// Get one Comic
    /// </summary>
    public async Task<Comic> Comic(ComicWhereUniqueInput uniqueId)
    {
        var comics = await this.Comics(
            new ComicFindManyArgs { Where = new ComicWhereInput { Id = uniqueId.Id } }
        );
        var comic = comics.FirstOrDefault();
        if (comic == null)
        {
            throw new NotFoundException();
        }

        return comic;
    }

    /// <summary>
    /// Update one Comic
    /// </summary>
    public async Task UpdateComic(ComicWhereUniqueInput uniqueId, ComicUpdateInput updateDto)
    {
        var comic = updateDto.ToModel(uniqueId);

        if (updateDto.Chapters != null)
        {
            comic.Chapters = await _context
                .Chapters.Where(chapter => updateDto.Chapters.Select(t => t).Contains(chapter.Id))
                .ToListAsync();
        }

        _context.Entry(comic).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Comics.Any(e => e.Id == comic.Id))
            {
                throw new NotFoundException();
            }
            else
            {
                throw;
            }
        }
    }

    /// <summary>
    /// Connect multiple Chapters records to Comic
    /// </summary>
    public async Task ConnectChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] childrenIds
    )
    {
        var parent = await _context
            .Comics.Include(x => x.Chapters)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (parent == null)
        {
            throw new NotFoundException();
        }

        var children = await _context
            .Chapters.Where(t => childrenIds.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (children.Count == 0)
        {
            throw new NotFoundException();
        }

        var childrenToConnect = children.Except(parent.Chapters);

        foreach (var child in childrenToConnect)
        {
            parent.Chapters.Add(child);
        }

        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Disconnect multiple Chapters records from Comic
    /// </summary>
    public async Task DisconnectChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] childrenIds
    )
    {
        var parent = await _context
            .Comics.Include(x => x.Chapters)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (parent == null)
        {
            throw new NotFoundException();
        }

        var children = await _context
            .Chapters.Where(t => childrenIds.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();

        foreach (var child in children)
        {
            parent.Chapters?.Remove(child);
        }
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find multiple Chapters records for Comic
    /// </summary>
    public async Task<List<Chapter>> FindChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterFindManyArgs comicFindManyArgs
    )
    {
        var chapters = await _context
            .Chapters.Where(m => m.ComicId == uniqueId.Id)
            .ApplyWhere(comicFindManyArgs.Where)
            .ApplySkip(comicFindManyArgs.Skip)
            .ApplyTake(comicFindManyArgs.Take)
            .ApplyOrderBy(comicFindManyArgs.SortBy)
            .ToListAsync();

        return chapters.Select(x => x.ToDto()).ToList();
    }

    /// <summary>
    /// Update multiple Chapters records for Comic
    /// </summary>
    public async Task UpdateChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] childrenIds
    )
    {
        var comic = await _context
            .Comics.Include(t => t.Chapters)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (comic == null)
        {
            throw new NotFoundException();
        }

        var children = await _context
            .Chapters.Where(a => childrenIds.Select(x => x.Id).Contains(a.Id))
            .ToListAsync();

        if (children.Count == 0)
        {
            throw new NotFoundException();
        }

        comic.Chapters = children;
        await _context.SaveChangesAsync();
    }
}
