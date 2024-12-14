using ComicService.APIs.Common;
using ComicService.APIs.Dtos;

namespace ComicService.APIs;

public interface IChaptersService
{
    /// <summary>
    /// Create one Chapter
    /// </summary>
    public Task<Chapter> CreateChapter(ChapterCreateInput chapter);

    /// <summary>
    /// Delete one Chapter
    /// </summary>
    public Task DeleteChapter(ChapterWhereUniqueInput uniqueId);

    /// <summary>
    /// Find many Chapters
    /// </summary>
    public Task<List<Chapter>> Chapters(ChapterFindManyArgs findManyArgs);

    /// <summary>
    /// Meta data about Chapter records
    /// </summary>
    public Task<MetadataDto> ChaptersMeta(ChapterFindManyArgs findManyArgs);

    /// <summary>
    /// Get one Chapter
    /// </summary>
    public Task<Chapter> Chapter(ChapterWhereUniqueInput uniqueId);

    /// <summary>
    /// Update one Chapter
    /// </summary>
    public Task UpdateChapter(ChapterWhereUniqueInput uniqueId, ChapterUpdateInput updateDto);

    /// <summary>
    /// Get a Comic record for Chapter
    /// </summary>
    public Task<Comic> GetComic(ChapterWhereUniqueInput uniqueId);
}
