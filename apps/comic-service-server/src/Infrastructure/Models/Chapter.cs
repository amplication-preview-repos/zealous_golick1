using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ComicService.Core.Enums;

namespace ComicService.Infrastructure.Models;

[Table("Chapters")]
public class ChapterDbModel
{
    public string? ComicId { get; set; }

    [ForeignKey(nameof(ComicId))]
    public ComicDbModel? Comic { get; set; } = null;

    [Required()]
    public DateTime CreatedAt { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    public ImagesEnum? Images { get; set; }

    [Range(-999999999, 999999999)]
    public int? NumberField { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public string? Thumbnail { get; set; }

    [StringLength(1000)]
    public string? Title { get; set; }

    public DateTime? UpdateDate { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
