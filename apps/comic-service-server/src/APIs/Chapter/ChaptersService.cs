using ComicService.Infrastructure;

namespace ComicService.APIs;

public class ChaptersService : ChaptersServiceBase
{
    public ChaptersService(ComicServiceDbContext context)
        : base(context) { }
}
