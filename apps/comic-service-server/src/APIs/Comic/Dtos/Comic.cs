using ComicService.Core.Enums;

namespace ComicService.APIs.Dtos;

public class Comic
{
    public List<string>? Chapters { get; set; }

    public string? Cover { get; set; }

    public DateTime CreatedAt { get; set; }

    public GenresEnum? Genres { get; set; }

    public string Id { get; set; }

    public StatusEnum? Status { get; set; }

    public string? Summary { get; set; }

    public TagsEnum? Tags { get; set; }

    public string? Title { get; set; }

    public DateTime UpdatedAt { get; set; }
}
