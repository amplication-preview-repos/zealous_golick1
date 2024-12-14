using ComicService.APIs;
using ComicService.APIs.Common;
using ComicService.APIs.Dtos;
using ComicService.APIs.Errors;
using Microsoft.AspNetCore.Mvc;

namespace ComicService.APIs;

[Route("api/[controller]")]
[ApiController()]
public abstract class ComicsControllerBase : ControllerBase
{
    protected readonly IComicsService _service;

    public ComicsControllerBase(IComicsService service)
    {
        _service = service;
    }

    /// <summary>
    /// Create one Comic
    /// </summary>
    [HttpPost()]
    public async Task<ActionResult<Comic>> CreateComic(ComicCreateInput input)
    {
        var comic = await _service.CreateComic(input);

        return CreatedAtAction(nameof(Comic), new { id = comic.Id }, comic);
    }

    /// <summary>
    /// Delete one Comic
    /// </summary>
    [HttpDelete("{Id}")]
    public async Task<ActionResult> DeleteComic([FromRoute()] ComicWhereUniqueInput uniqueId)
    {
        try
        {
            await _service.DeleteComic(uniqueId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Find many Comics
    /// </summary>
    [HttpGet()]
    public async Task<ActionResult<List<Comic>>> Comics([FromQuery()] ComicFindManyArgs filter)
    {
        return Ok(await _service.Comics(filter));
    }

    /// <summary>
    /// Meta data about Comic records
    /// </summary>
    [HttpPost("meta")]
    public async Task<ActionResult<MetadataDto>> ComicsMeta([FromQuery()] ComicFindManyArgs filter)
    {
        return Ok(await _service.ComicsMeta(filter));
    }

    /// <summary>
    /// Get one Comic
    /// </summary>
    [HttpGet("{Id}")]
    public async Task<ActionResult<Comic>> Comic([FromRoute()] ComicWhereUniqueInput uniqueId)
    {
        try
        {
            return await _service.Comic(uniqueId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    /// <summary>
    /// Update one Comic
    /// </summary>
    [HttpPatch("{Id}")]
    public async Task<ActionResult> UpdateComic(
        [FromRoute()] ComicWhereUniqueInput uniqueId,
        [FromQuery()] ComicUpdateInput comicUpdateDto
    )
    {
        try
        {
            await _service.UpdateComic(uniqueId, comicUpdateDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Connect multiple Chapters records to Comic
    /// </summary>
    [HttpPost("{Id}/chapters")]
    public async Task<ActionResult> ConnectChapters(
        [FromRoute()] ComicWhereUniqueInput uniqueId,
        [FromQuery()] ChapterWhereUniqueInput[] chaptersId
    )
    {
        try
        {
            await _service.ConnectChapters(uniqueId, chaptersId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Disconnect multiple Chapters records from Comic
    /// </summary>
    [HttpDelete("{Id}/chapters")]
    public async Task<ActionResult> DisconnectChapters(
        [FromRoute()] ComicWhereUniqueInput uniqueId,
        [FromBody()] ChapterWhereUniqueInput[] chaptersId
    )
    {
        try
        {
            await _service.DisconnectChapters(uniqueId, chaptersId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Find multiple Chapters records for Comic
    /// </summary>
    [HttpGet("{Id}/chapters")]
    public async Task<ActionResult<List<Chapter>>> FindChapters(
        [FromRoute()] ComicWhereUniqueInput uniqueId,
        [FromQuery()] ChapterFindManyArgs filter
    )
    {
        try
        {
            return Ok(await _service.FindChapters(uniqueId, filter));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    /// <summary>
    /// Update multiple Chapters records for Comic
    /// </summary>
    [HttpPatch("{Id}/chapters")]
    public async Task<ActionResult> UpdateChapters(
        [FromRoute()] ComicWhereUniqueInput uniqueId,
        [FromBody()] ChapterWhereUniqueInput[] chaptersId
    )
    {
        try
        {
            await _service.UpdateChapters(uniqueId, chaptersId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }
}
