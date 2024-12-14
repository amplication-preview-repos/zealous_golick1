using ComicService.APIs;

namespace ComicService;

public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Add services to the container.
    /// </summary>
    public static void RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IChaptersService, ChaptersService>();
        services.AddScoped<IComicsService, ComicsService>();
    }
}
