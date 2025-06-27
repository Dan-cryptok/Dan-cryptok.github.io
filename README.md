<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <h1>Hello World</h1>

    <input type="file" accept="image/*" id="file-input" />
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js');
        }

        const fileInput = document.getElementById('file-input');

        fileInput.addEventListener('change', (e) =>
        doSomethingWithFiles(e.target.files),
        );
    </script>
</body>
</html>
