using ComicService.APIs;
using ComicService.APIs.Common;
using ComicService.APIs.Dtos;
using ComicService.APIs.Errors;
using ComicService.APIs.Extensions;
using ComicService.Infrastructure;
using ComicService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace ComicService.APIs;

public abstract class ChaptersServiceBase : IChaptersService
{
    protected readonly ComicServiceDbContext _context;

    public ChaptersServiceBase(ComicServiceDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Create one Chapter
    /// </summary>
    public async Task<Chapter> CreateChapter(ChapterCreateInput createDto)
    {
        var chapter = new ChapterDbModel
        {
            CreatedAt = createDto.CreatedAt,
            Images = createDto.Images,
            NumberField = createDto.NumberField,
            ReleaseDate = createDto.ReleaseDate,
            Thumbnail = createDto.Thumbnail,
            Title = createDto.Title,
            UpdateDate = createDto.UpdateDate,
            UpdatedAt = createDto.UpdatedAt
        };

        if (createDto.Id != null)
        {
            chapter.Id = createDto.Id;
        }
        if (createDto.Comic != null)
        {
            chapter.Comic = await _context
                .Comics.Where(comic => createDto.Comic.Id == comic.Id)
                .FirstOrDefaultAsync();
        }

        _context.Chapters.Add(chapter);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<ChapterDbModel>(chapter.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    /// <summary>
    /// Delete one Chapter
    /// </summary>
    public async Task DeleteChapter(ChapterWhereUniqueInput uniqueId)
    {
        var chapter = await _context.Chapters.FindAsync(uniqueId.Id);
        if (chapter == null)
        {
            throw new NotFoundException();
        }

        _context.Chapters.Remove(chapter);
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find many Chapters
    /// </summary>
    public async Task<List<Chapter>> Chapters(ChapterFindManyArgs findManyArgs)
    {
        var chapters = await _context
            .Chapters.Include(x => x.Comic)
            .ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();
        return chapters.ConvertAll(chapter => chapter.ToDto());
    }

    /// <summary>
    /// Meta data about Chapter records
    /// </summary>
    public async Task<MetadataDto> ChaptersMeta(ChapterFindManyArgs findManyArgs)
    {
        var count = await _context.Chapters.ApplyWhere(findManyArgs.Where).CountAsync();

        return new MetadataDto { Count = count };
    }

    /// <summary>
    /// Get one Chapter
    /// </summary>
    public async Task<Chapter> Chapter(ChapterWhereUniqueInput uniqueId)
    {
        var chapters = await this.Chapters(
            new ChapterFindManyArgs { Where = new ChapterWhereInput { Id = uniqueId.Id } }
        );
        var chapter = chapters.FirstOrDefault();
        if (chapter == null)
        {
            throw new NotFoundException();
        }

        return chapter;
    }

    /// <summary>
    /// Update one Chapter
    /// </summary>
    public async Task UpdateChapter(ChapterWhereUniqueInput uniqueId, ChapterUpdateInput updateDto)
    {
        var chapter = updateDto.ToModel(uniqueId);

        if (updateDto.Comic != null)
        {
            chapter.Comic = await _context
                .Comics.Where(comic => updateDto.Comic == comic.Id)
                .FirstOrDefaultAsync();
        }

        _context.Entry(chapter).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Chapters.Any(e => e.Id == chapter.Id))
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
    /// Get a Comic record for Chapter
    /// </summary>
    public async Task<Comic> GetComic(ChapterWhereUniqueInput uniqueId)
    {
        var chapter = await _context
            .Chapters.Where(chapter => chapter.Id == uniqueId.Id)
            .Include(chapter => chapter.Comic)
            .FirstOrDefaultAsync();
        if (chapter == null)
        {
            throw new NotFoundException();
        }
        return chapter.Comic.ToDto();
    }
}
