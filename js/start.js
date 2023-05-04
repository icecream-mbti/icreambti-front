const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const clipboard = new ClipboardJS('.btn');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});

function start() {
    main.style.display = "none";
    qna.style.display = "block";
    result.style.display = "none";

    next(0);
}

function next(pageIdx) {
    let title = document.querySelector(".question #title");
    let answer_a = document.querySelector(".answers #A");
    let answer_a_btn = document.querySelector(".answers #A .btn_select");
    let answer_b = document.querySelector(".answers #B");
    let answer_b_btn = document.querySelector(".answers #B .btn_select");
    let page = document.querySelector("input[id='page']");
    let pageCnt = document.querySelector(".page #cnt");

    title.innerHTML = qnaList[pageIdx].q;
    answer_a.href = `javascript:select('${qnaList[pageIdx].a[0].type}')`;
    answer_a_btn.innerHTML = qnaList[pageIdx].a[0].answer;
    answer_b.href = `javascript:select('${qnaList[pageIdx].a[1].type}')`;
    answer_b_btn.innerHTML = qnaList[pageIdx].a[1].answer;
    page.value = ++pageIdx;
    pageCnt.innerText = pageIdx;
}

function select(type) {
    let mbtiType = document.querySelector(`#qna input[id=${type}]`);
    let pageIdx = document.querySelector("input[id='page']").value;

    mbtiType.value = ++mbtiType.value;

    if (pageIdx < 12) {
        next(pageIdx);
    } else {
        end();
    }
}

function end() {
    qna.style.display = "none";
    result.style.display = "block";
}

function retest() {
    main.style.display = "flex";
    qna.style.display = "none";
    result.style.display = "none";
}

function copylink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert("링크가 복사되었습니다. 친구에게 공유해보세요!"))
        .catch(() => alert("다시 시도해보세요."))
}