using ComicService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace ComicService.Infrastructure;

public class ComicServiceDbContext : DbContext
{
    public ComicServiceDbContext(DbContextOptions<ComicServiceDbContext> options)
        : base(options) { }

    public DbSet<ChapterDbModel> Chapters { get; set; }

    public DbSet<ComicDbModel> Comics { get; set; }
}
