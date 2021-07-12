let accordions;
const accordionWrapper = document.querySelector(".accordion-wrapper");

const contentData = [
  {
    id: 1,
    title: "title 1",
    contetnt: "content 1",
  },
  {
    id: 2,
    title: "title 2",
    contetnt: "content 2",
  },
  {
    id: 3,
    title: "title 3",
    contetnt: "content 3",
  },
  {
    id: 4,
    title: "title 4",
    contetnt: "content 4",
  },
  {
    id: 5,
    title: "title 5",
    contetnt: "content 5",
  },
  {
    id: 6,
    title: "title 6",
    contetnt: "content 6",
  },
];

const createTemplate = (item) => {
  return `
    <div class="accordion-item">
        <div class="accordion-item-title">${item.title}</div>
        <div class="accordion-item-content">${item.content}</div>
      </div>
    `;
};

const fillHtmlList = () => {
  contentData.forEach((item) => {
    accordionWrapper.innerHTML += createTemplate(item);
  });
  accordions = document.querySelectorAll(".accordion-item");
};

fillHtmlList();

if (accordions) {
  for (item of accordions) {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.ClassList.remove("active");
      } else {
        for (el of accordions) {
          // el.classlist.remove("active");
        }
        this.classList.add("active");
      }
    });
  }
}
