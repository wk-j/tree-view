
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace TreeView.Controllers {

    [Route("api/[controller]/[action]")]
    public class TreeController : ControllerBase {

        string[] patterns = { "*.dll" };

        private bool ContainFiles(DirectoryInfo info) {
            return patterns.Any(x => info.GetFiles(x, SearchOption.AllDirectories).Count() > 0);
        }

        private IEnumerable<FileInfo> GetFiles(DirectoryInfo info) {
            return patterns.Select(x => info.GetFiles(x)).SelectMany(x => x);
        }

        private IEnumerable<Node> FindNode(DirectoryInfo root) {

            foreach (var file in GetFiles(root)) {
                yield return new Node {
                    IsRoot = false,
                    Id = file.FullName.GetHashCode(),
                    Name = file.Name,
                    IsFile = true,
                    Parent = root.FullName.GetHashCode()
                };
            }

            foreach (var item in root.GetDirectories().Where(ContainFiles)) {
                yield return new Node {
                    IsRoot = false,
                    Id = item.FullName.GetHashCode(),
                    Name = item.Name,
                    Parent = root.FullName.GetHashCode()
                };

                foreach (var file in FindNode(item)) {
                    yield return file;
                }
            }
        }

        [HttpGet]
        public IEnumerable<Node> GetNodes() {
            var dir = new DirectoryInfo(".");
            return FindNode(dir).Append(new Node {
                IsRoot = true,
                Name = dir.Name,
                Parent = 0,
                Id = dir.FullName.GetHashCode()
            });
        }
    }
}