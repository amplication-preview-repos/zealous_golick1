using ComicService.Core.Enums;

namespace ComicService.APIs.Dtos;

public class ChapterCreateInput
{
    public Comic? Comic { get; set; }

    public DateTime CreatedAt { get; set; }

    public string? Id { get; set; }

    public ImagesEnum? Images { get; set; }

    public int? NumberField { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public string? Thumbnail { get; set; }

    public string? Title { get; set; }

    public DateTime? UpdateDate { get; set; }

    public DateTime UpdatedAt { get; set; }
}
