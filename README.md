# portfolio

List-based developer portfolio — raw early-web feel, high-end finish. Markdown-driven, no build step, fully static.

## run

```sh
node server.js          # http://localhost:8888
```

Or serve the folder with anything static (GitHub Pages works as-is).

## add a project

1. Write `projects/my-thing.md` — plain markdown
2. Add an entry to `projects.json` (slug, title, year, one-liner, tags, featured)
3. Drop media into `media/` and embed it from the markdown:

```md
![screenshot](media/my-thing.png)
![animation](media/my-thing.gif)
![demo](media/my-thing.mp4)      <- videos work with image syntax
```

Italic text directly under an image becomes its caption:

```md
![screenshot](media/my-thing.png)
*The dashboard, March 2026*
```

## structure

```
index.html      shell (header/footer)
style.css       Berkeley Mono, classic link colors, light+dark
app.js          hash router + marked renderer (img → video for .mp4/.webm/.mov)
projects.json   the list — order here is the order on the page
projects/*.md   one file per project
media/          images, gifs, video
fonts/          Berkeley Mono
```
