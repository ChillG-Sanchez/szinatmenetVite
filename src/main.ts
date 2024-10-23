import './style.css';

function updateGradient() {
    const color1 = (document.getElementById('color1') as HTMLInputElement).value;
    const color2 = (document.getElementById('color2') as HTMLInputElement).value;
    const gradientPreview = document.getElementById('gradientPreview') as HTMLDivElement;

    gradientPreview.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

document.getElementById('color1')?.addEventListener('input', updateGradient);
document.getElementById('color2')?.addEventListener('input', updateGradient);


updateGradient();