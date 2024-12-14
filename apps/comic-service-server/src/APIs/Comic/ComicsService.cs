using ComicService.Infrastructure;

namespace ComicService.APIs;

public class ComicsService : ComicsServiceBase
{
    public ComicsService(ComicServiceDbContext context)
        : base(context) { }
}
