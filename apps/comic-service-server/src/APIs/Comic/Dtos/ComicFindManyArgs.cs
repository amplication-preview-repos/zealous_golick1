using ComicService.APIs.Common;
using ComicService.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComicService.APIs.Dtos;

[BindProperties(SupportsGet = true)]
public class ComicFindManyArgs : FindManyInput<Comic, ComicWhereInput> { }
