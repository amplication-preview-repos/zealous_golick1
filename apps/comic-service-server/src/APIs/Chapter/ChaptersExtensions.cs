using ComicService.APIs.Dtos;
using ComicService.Infrastructure.Models;

namespace ComicService.APIs.Extensions;

public static class ChaptersExtensions
{
    public static Chapter ToDto(this ChapterDbModel model)
    {
        return new Chapter
        {
            Comic = model.ComicId,
            CreatedAt = model.CreatedAt,
            Id = model.Id,
            Images = model.Images,
            NumberField = model.NumberField,
            ReleaseDate = model.ReleaseDate,
            Thumbnail = model.Thumbnail,
            Title = model.Title,
            UpdateDate = model.UpdateDate,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static ChapterDbModel ToModel(
        this ChapterUpdateInput updateDto,
        ChapterWhereUniqueInput uniqueId
    )
    {
        var chapter = new ChapterDbModel
        {
            Id = uniqueId.Id,
            Images = updateDto.Images,
            NumberField = updateDto.NumberField,
            ReleaseDate = updateDto.ReleaseDate,
            Thumbnail = updateDto.Thumbnail,
            Title = updateDto.Title,
            UpdateDate = updateDto.UpdateDate
        };

        if (updateDto.Comic != null)
        {
            chapter.ComicId = updateDto.Comic;
        }
        if (updateDto.CreatedAt != null)
        {
            chapter.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            chapter.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return chapter;
    }
}
