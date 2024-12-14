using Microsoft.AspNetCore.Mvc;

namespace ComicService.APIs;

[ApiController()]
public class ChaptersController : ChaptersControllerBase
{
    public ChaptersController(IChaptersService service)
        : base(service) { }
}
