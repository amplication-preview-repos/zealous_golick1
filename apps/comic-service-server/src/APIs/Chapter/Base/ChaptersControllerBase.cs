using ComicService.APIs;
using ComicService.APIs.Common;
using ComicService.APIs.Dtos;
using ComicService.APIs.Errors;
using Microsoft.AspNetCore.Mvc;

namespace ComicService.APIs;

[Route("api/[controller]")]
[ApiController()]
public abstract class ChaptersControllerBase : ControllerBase
{
    protected readonly IChaptersService _service;

    public ChaptersControllerBase(IChaptersService service)
    {
        _service = service;
    }

    /// <summary>
    /// Create one Chapter
    /// </summary>
    [HttpPost()]
    public async Task<ActionResult<Chapter>> CreateChapter(ChapterCreateInput input)
    {
        var chapter = await _service.CreateChapter(input);

        return CreatedAtAction(nameof(Chapter), new { id = chapter.Id }, chapter);
    }

    /// <summary>
    /// Delete one Chapter
    /// </summary>
    [HttpDelete("{Id}")]
    public async Task<ActionResult> DeleteChapter([FromRoute()] ChapterWhereUniqueInput uniqueId)
    {
        try
        {
            await _service.DeleteChapter(uniqueId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Find many Chapters
    /// </summary>
    [HttpGet()]
    public async Task<ActionResult<List<Chapter>>> Chapters(
        [FromQuery()] ChapterFindManyArgs filter
    )
    {
        return Ok(await _service.Chapters(filter));
    }

    /// <summary>
    /// Meta data about Chapter records
    /// </summary>
    [HttpPost("meta")]
    public async Task<ActionResult<MetadataDto>> ChaptersMeta(
        [FromQuery()] ChapterFindManyArgs filter
    )
    {
        return Ok(await _service.ChaptersMeta(filter));
    }

    /// <summary>
    /// Get one Chapter
    /// </summary>
    [HttpGet("{Id}")]
    public async Task<ActionResult<Chapter>> Chapter([FromRoute()] ChapterWhereUniqueInput uniqueId)
    {
        try
        {
            return await _service.Chapter(uniqueId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    /// <summary>
    /// Update one Chapter
    /// </summary>
    [HttpPatch("{Id}")]
    public async Task<ActionResult> UpdateChapter(
        [FromRoute()] ChapterWhereUniqueInput uniqueId,
        [FromQuery()] ChapterUpdateInput chapterUpdateDto
    )
    {
        try
        {
            await _service.UpdateChapter(uniqueId, chapterUpdateDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Get a Comic record for Chapter
    /// </summary>
    [HttpGet("{Id}/comic")]
    public async Task<ActionResult<List<Comic>>> GetComic(
        [FromRoute()] ChapterWhereUniqueInput uniqueId
    )
    {
        var comic = await _service.GetComic(uniqueId);
        return Ok(comic);
    }
}
