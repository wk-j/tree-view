
Task("Start-Server").Does(() => {
    StartProcess("python", new ProcessSettings {
        WorkingDirectory = "dist",
        Arguments = "-m SimpleHTTPServer 8000"
    });
});

var target = Argument("target", "default");
RunTarget(target);