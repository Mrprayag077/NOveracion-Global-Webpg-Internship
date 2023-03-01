getPosts(Data_URL);

async function getPosts(url) {
  const responce = await fetch(url);
  const data = await responce.json();
  showPostSection(data);
}
function showPostSection(data) {
  postsSection.forEach((section) => {
    //getting current section node
    const currentSection = section;
    // clearing current section's inner html
    currentSection.innerHTML = ``;
    // getting current section's category name
    const categoryName = section.dataset.postsCategory;
    // searching available data which matches with current section's category name and storing it in variable
    const categoryData = data.find((category) => {
      return category.name === categoryName;
    });
    // destructuring category data from categoryData
    // const { title, description, PostsObject } = categoryData;
    const title = "Why we do what we do?";
    const description1 = "We believe in the power of innovation to build solutions that create an impact.";
    const description2 = "We at NOVERACION GLOBAL believe that innovation is a key growth driver for any business or organization and leveraging cutting edge technology can not only help organizations to stay ahead of competition but also help to deliver best always, creating sustainable value for all stakeholders.";
    const description3 = "We believe that the toughest problem can be solved by exploring the nutshell and adding a Flavour of Excitement and Innovation to crack the nutshell can lead to hilarious results.<br>We believe that converting a vision into reality is a by-product of not just HARD but also SMART work.";
    const description4 = "Adding a touch of Excitement and Innovation to deliver more value, we are committed to help you change with the changing world. We can help you to reach the epitome of your excellence.<br>We are Excited to Innovate.";
    //creating html structure
    // creating container
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("container");
    // creating row inside container (container > row )
    // row structure (container > row > textwrapper + posts wrapper)
    const row = document.createElement("div");
    row.classList.add("row", "gy-4");
    // creating textWrapper inside row (container > row > textwrapper )
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("col-12", "col-sm-10", "col-md-8", "col-lg-7");
    textWrapper.innerHTML = `
    <h2 class="cl-blue-900">
                ${title}
              </h2>
              <h5 style="font-style: italic; color:#f58a07">
              ${description1}
              </h5>
              <p class="mt-3">
                ${description2}
              </p>
              <p class="mt-3">
                ${description3}
              </p>
              <p class="mt-3">
                ${description4}
              </p>
    `;
    // creating PostWrapper inside row (container > row > postWrapper )
    const PostWrapper = document.createElement("div");
    PostWrapper.classList.add("col-12");
    const postWrapperRow = document.createElement("div");
    postWrapperRow.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-3",
      "mt-3"
    );
    const postObj = categoryData.PostsObject;
    postObj.forEach((post) => {
      const { title, imgURL, description } = post;
      const PostEl = document.createElement("div");
      PostEl.classList.add("col");
      PostEl.innerHTML = `
      <div class="card h-100 border-0 bg-transparent">
      <img
        src="${imgURL}"
        class="card-img-top b-6"
        alt="${title}"
      />
      <div class="card-body px-0 py-4">
        <h5 class="card-title cl-primary-800">${title}</h5>
        <p class="card-text cl-battelshipGrey-600">
        ${description}
        </p>
        <a href="./BlogInner.html" class="">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
      postWrapperRow.appendChild(PostEl);
    });
    PostWrapper.appendChild(postWrapperRow);
    row.appendChild(textWrapper);
    row.appendChild(PostWrapper);
    sectionContainer.appendChild(row);
    currentSection.appendChild(sectionContainer);
  });
}
