fetch().then((data) => {
    return data.json();
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData +=
            `<div class="col">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="80"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">${values.team}</text>
            </svg>

            <div class="card-body">
                <p class="card-text">
                    <li>${values.jungler}</li>
                    <li>${values.explaner}</li>
                    <li>${values.midlaner}</li>
                    <li>${values.roamer}</li>
                    <li>${values.goldlaner}</li>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>
    </div>`;
    });

    document.getElementById("data").innerHTML = tableData;
})