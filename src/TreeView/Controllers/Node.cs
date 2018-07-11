namespace TreeView.Controllers {
    public class Node {
        public bool IsRoot { set; get; }
        public bool IsFile { set; get; }
        public int Id { set; get; }
        public string Name { set; get; }
        public int Parent { set; get; }
    }
}