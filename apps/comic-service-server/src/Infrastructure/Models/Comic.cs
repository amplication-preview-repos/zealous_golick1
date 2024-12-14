using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ComicService.Core.Enums;

namespace ComicService.Infrastructure.Models;

[Table("Comics")]
public class ComicDbModel
{
    public List<ChapterDbModel>? Chapters { get; set; } = new List<ChapterDbModel>();

    public string? Cover { get; set; }

    [Required()]
    public DateTime CreatedAt { get; set; }

    public GenresEnum? Genres { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    public StatusEnum? Status { get; set; }

    [StringLength(1000)]
    public string? Summary { get; set; }

    public TagsEnum? Tags { get; set; }

    [StringLength(1000)]
    public string? Title { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
