class TheGraphAppLauncher extends HTMLElement {
  constructor() {
    super();

    // Créer le menu HTML
    this.innerHTML = `
            <div class="dropdown dropdown-end relative">
                <label id="dropdown-toggle" tabindex="0" class="flex gap-2 items-center justify-center text-white h-9 max-lg:w-9 max-lg:p-0 px-3 py-1 cursor-pointer bg-primary-500 transition-all rounded-lg outline-none">
                    <span class="icon-menu">
                        <i data-lucide="grip" class="w-4 h-4"></i>
                    </span>
                    <span class="icon-logo hidden">
                        <img src="/static/images/TheGraph_logo.svg" alt="The Graph logo" width="24" height="24" class="w-4 h-4"/>
                    </span>
                    <span class="max-md:hidden">Apps</span>
                </label>
                <ul id="dropdown-content" class="hidden dropdown-content menu bg-[#161426] border p-0 border-white/5 mt-4 overflow-hidden grid grid-cols-2 absolute right-0 w-[335px] rounded-md">
                    <li>
                        <a href="https://thegraph.com/studio/" target="_blank" class="menu-item">
                            <img src="/static/images/subgraph.svg" alt="Subgraph Studio logo" width="32" height="32"/>
                            <p>Subgraph Studio</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://thegraph.com/explorer" target="_blank" class="menu-item">
                            <img src="/static/images/graph-explorer.svg" alt="Graph Explorer logo" width="32" height="32"/>
                            <p>Graph Explorer</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://substreams.dev" target="_blank" class="menu-item">
                            <img src="/static/images/substreams.svg" alt="Substreams logo" width="32" height="32"/>
                            <p>Substreams.dev</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://thegraph.market" target="_blank" class="menu-item">
                            <img src="/static/images/thegraph-market.svg" alt="The Graph Market logo" width="32" height="32"/>
                            <p>The Graph Market</p>
                        </a>
                    </li>
                </ul>
            </div>
        `;

    // Ajouter l'événement pour afficher/masquer le menu
    const dropdownToggle = this.querySelector("#dropdown-toggle");
    const dropdownContent = this.querySelector("#dropdown-content");

    dropdownToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownContent.classList.toggle("hidden");
    });

    // Fermer le dropdown si on clique en dehors
    document.addEventListener("click", function (event) {
      if (
        !dropdownToggle.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.classList.add("hidden");
      }
    });
  }
}

// Déclarer le Web Component
customElements.define("thegraph-app-launcher", TheGraphAppLauncher);
