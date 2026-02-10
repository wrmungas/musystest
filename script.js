// --- key data definitions ---------------------------------------------------

const nav = {
    title: document.getElementById("nav-title"),
    subtitle: document.getElementById("nav-subtitle"),
    content: document.getElementById("nav-content")
};

const body = document.getElementById("page-body");

const root = {};

let current_page;

const pages = Object.freeze({
    landing: 'welcome',
    create_proj: 'create project',
    project_main: 'project overview',
    categories: 'categories',
    requirements: 'requirements',
    create_req: 'create requirement',
    create_cat: 'create category',
});

// --- general interactivity functions ----------------------------------------

// create a page navigation function
const make_nav = (page) => {
    return () => load_page(page);
}

// build a <ul> from a list of strings; if the list is empty, return the empty
// text instead
const build_ul = (list, empty) => {
    if(list.length === 0) {
        return empty;
    }

    let list_html = `<ul>`;

    for(e of list) {
        list_html += `<li>${e}</li>`;
    }
    list_html += `</ul>`

    return list_html;
}

// --- error page -------------------------------------------------------------

 


// loads the load-error page
const load_error = () => {
    body.innerHTML = `
    <div class="container">
        <p>Sorry, an error occurred<p>
        <button id="back-button">Back to landing page</button>
    </div>`;

    const back_button = document.getElementById("back-button");

    back_button.addEventListener('click', make_nav(pages.landing));
};

// --- landing page -----------------------------------------------------------

const load_landing = () => {
    body.innerHTML = `
    <div class="container">
        <div class="main-text">
            <p>Welcome!</p>
            <p>You aren't working a project yet - how would you like to get started?</p>
        </div>
    </div>

    <div class="options">
        <button class="pos" id="create-project-button">Create new</button>
        <button class="neu" id="upload-project-button">Upload</button>
    </div>`;

    setTimeout(() => {
        const create_button = document.getElementById("create-project-button");

        create_button.addEventListener(
            "click", 
            make_nav(pages.create_proj)
        );

        const upload_button = document.getElementById("upload-project-button");

        upload_button.addEventListener(
            "click",
            make_nav(pages.upload_proj)
        );
    }, 0);
};

// --- create new project page ------------------------------------------------

const load_create_proj = () => {
    body.innerHTML = `
    <div class="container">
        <p>Enter Project name:</p>
        
        <form id="project-name-form">
            <input id="project-name-input">
        </form>
    </div>`;

    const input = document.getElementById("project-name-input");

    const form = document.getElementById("project-name-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        root.meta = {
            name : input.value
        };

        root.categories = {};
        root.tests = {};

        nav.title.innerText = root.meta.name

        load_page(pages.project_main);
    });
}

// --- project main page ------------------------------------------------------

const load_project_main = () => {
    let categories = Object.keys(root.categories);
    
    build_ul(categories, `<p>You have no categories!</p>`);

    body.innerHTML = `
    <div class="container">
        <h1>${root.meta.name}</h1>

        <h2>Categories<h2>

        <div class="categories">
        </div>
    </div>
    `;
}

// --- categories page --------------------------------------------------------


// loads the categories overview page
const load_categories = () => {

};

// loads the category creation page
const load_create_category = () => {

};

// loads the requirements overview page
const load_requirements = () => {

};

// loads the system tests page
const load_system_tests = () => {

};

// --- universal load/unload --------------------------------------------------

// universal page unloader
const unload_page = () => {
    while(body.childNodes.length > 0) {
        body.removeChild(body.lastChild);
    }
};

// universal page loader
const load_page = (name) => {
    unload_page();

    switch(name) {
        case pages.landing:
            load_landing();
            break;
        case pages.create_proj:
            load_create_proj();
            break;
        case pages.categories:
            load_categories();
            break;
        case pages.project_main:
            load_project_main();
            break;
        default:
            load_error();
            break;
    }

    current_page = name;
    console.log(`current page: ${current_page}`);
    nav.subtitle.innerText = current_page;
};

// --- begin actual script ----------------------------------------------------

nav.title.innerText = "(No Project)"
load_page(pages.landing);
