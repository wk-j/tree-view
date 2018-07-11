
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace TreeView.Controllers {

    public class Node {
        public bool IsRoot { set; get; }
        public int Id { set; get; }
        public string Name { set; get; }
        public int Parent { set; get; }
    }

    [Route("api/[controller]/[action]")]
    public class TreeController : ControllerBase {

        private IEnumerable<Node> FindNode(DirectoryInfo root) {
            foreach (var file in root.GetFiles()) {
                yield return new Node {
                    IsRoot = false,
                    Id = file.FullName.GetHashCode(),
                    Name = file.Name,
                    Parent = root.FullName.GetHashCode()
                };
            }

            foreach (var item in root.GetDirectories()) {
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