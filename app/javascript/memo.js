function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const fromData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (HXR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    }
    const item = XHR.response.post;
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    const HTML = `
      <div class="post" data-id=${item.id}>
        <div class="post-dat"e>
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
        ${item.content}
        </div>`;
      list.insertAdjacentElement("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo);