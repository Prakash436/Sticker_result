var resultdata = JSON.parse(data);
var file_names = resultdata[0].file_name;
var score = resultdata[0].average_score;
let n = Object.keys(file_names).length;
for (let i = 0; i < n; i++) {
    console.log(file_names[i]);
}
for (let i = 0; i < n; i++) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const rankElement = document.createElement('rank');
    rankElement.textContent = i + 1;

    const imgElement = document.createElement('img');
    imgElement.className = 'image';
    imgElement.src = `./Stickers/${file_names[i]}`;

    const scoreElement = document.createElement('score');
    scoreElement.textContent = `${score[i]}/10`;

    containerDiv.appendChild(rankElement);
    containerDiv.appendChild(imgElement);
    containerDiv.appendChild(scoreElement);

    document.body.appendChild(containerDiv);
}
