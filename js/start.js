const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function start() {
    main.style.display = "none";
    qna.style.display = "block"

    next(0);
}

function next(pageIdx) {
    let title = document.querySelector(".question #title");
    let answer_a = document.querySelector(".answers #A .btn_select");
    let answer_b = document.querySelector(".answers #B .btn_select");
    let page = document.querySelector("input[id='page']");
    let pageCnt = document.querySelector(".page #cnt");

    title.innerHTML = qnaList[pageIdx].q;
    answer_a.innerHTML = qnaList[pageIdx].a[0].answer;
    answer_b.innerHTML = qnaList[pageIdx].a[1].answer;
    page.value = ++pageIdx;
    pageCnt.innerText = pageIdx;

}

function select() {
    let pageIdx = document.querySelector("input[id='page']").value;
    next(pageIdx);
}