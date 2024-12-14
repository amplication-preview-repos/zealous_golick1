using Microsoft.AspNetCore.Mvc;

namespace ComicService.APIs;

[ApiController()]
public class ComicsController : ComicsControllerBase
{
    public ComicsController(IComicsService service)
        : base(service) { }
}
