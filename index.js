document.getElementById('changeGradientButton').addEventListener('click', changeGradient);

function changeGradient() {
    const colors = [
        ['#ff0000', '#0000ff'],
        ['#00ff00', '#ff00ff'],
        ['#ffff00', '#00ffff'],
        ['#ff00ff', '#00ff00']
    ];

    const randomGradient = colors[Math.floor(Math.random() * colors.length)];
    const gradientBackground = document.querySelector('.gradient-background');
    
    gradientBackground.style.background = `linear-gradient(45deg, ${randomGradient[0]}, ${randomGradient[1]})`;
}
