using ComicService.APIs.Dtos;
using ComicService.Infrastructure.Models;

namespace ComicService.APIs.Extensions;

public static class ComicsExtensions
{
    public static Comic ToDto(this ComicDbModel model)
    {
        return new Comic
        {
            Chapters = model.Chapters?.Select(x => x.Id).ToList(),
            Cover = model.Cover,
            CreatedAt = model.CreatedAt,
            Genres = model.Genres,
            Id = model.Id,
            Status = model.Status,
            Summary = model.Summary,
            Tags = model.Tags,
            Title = model.Title,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static ComicDbModel ToModel(
        this ComicUpdateInput updateDto,
        ComicWhereUniqueInput uniqueId
    )
    {
        var comic = new ComicDbModel
        {
            Id = uniqueId.Id,
            Cover = updateDto.Cover,
            Genres = updateDto.Genres,
            Status = updateDto.Status,
            Summary = updateDto.Summary,
            Tags = updateDto.Tags,
            Title = updateDto.Title
        };

        if (updateDto.CreatedAt != null)
        {
            comic.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            comic.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return comic;
    }
}
