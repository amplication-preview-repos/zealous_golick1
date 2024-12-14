using ComicService.APIs.Common;
using ComicService.APIs.Dtos;

namespace ComicService.APIs;

public interface IComicsService
{
    /// <summary>
    /// Create one Comic
    /// </summary>
    public Task<Comic> CreateComic(ComicCreateInput comic);

    /// <summary>
    /// Delete one Comic
    /// </summary>
    public Task DeleteComic(ComicWhereUniqueInput uniqueId);

    /// <summary>
    /// Find many Comics
    /// </summary>
    public Task<List<Comic>> Comics(ComicFindManyArgs findManyArgs);

    /// <summary>
    /// Meta data about Comic records
    /// </summary>
    public Task<MetadataDto> ComicsMeta(ComicFindManyArgs findManyArgs);

    /// <summary>
    /// Get one Comic
    /// </summary>
    public Task<Comic> Comic(ComicWhereUniqueInput uniqueId);

    /// <summary>
    /// Update one Comic
    /// </summary>
    public Task UpdateComic(ComicWhereUniqueInput uniqueId, ComicUpdateInput updateDto);

    /// <summary>
    /// Connect multiple Chapters records to Comic
    /// </summary>
    public Task ConnectChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] chaptersId
    );

    /// <summary>
    /// Disconnect multiple Chapters records from Comic
    /// </summary>
    public Task DisconnectChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] chaptersId
    );

    /// <summary>
    /// Find multiple Chapters records for Comic
    /// </summary>
    public Task<List<Chapter>> FindChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterFindManyArgs ChapterFindManyArgs
    );

    /// <summary>
    /// Update multiple Chapters records for Comic
    /// </summary>
    public Task UpdateChapters(
        ComicWhereUniqueInput uniqueId,
        ChapterWhereUniqueInput[] chaptersId
    );
}
