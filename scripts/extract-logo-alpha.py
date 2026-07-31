from pathlib import Path
import sys

from PIL import Image


source = Path(sys.argv[1])
destination = Path(sys.argv[2])

image = Image.open(source).convert("RGBA")
pixels = []

for red, green, blue, _ in image.getdata():
    brightness_signal = (max(red, green, blue) - 42) / 118
    copper_signal = (red - blue - 7) / 54
    alpha = max(brightness_signal, copper_signal)
    alpha = max(0.0, min(1.0, alpha))
    alpha = alpha * alpha * (3 - 2 * alpha)

    if alpha < 0.045:
        alpha = 0.0

    pixels.append((red, green, blue, round(alpha * 255)))

image.putdata(pixels)
destination.parent.mkdir(parents=True, exist_ok=True)
image.save(destination, optimize=True)
