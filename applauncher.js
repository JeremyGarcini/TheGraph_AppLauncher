(function () {
  // Vérifier si l'élément est déjà injecté
  if (document.getElementById("custom-dropdown-menu")) return;

  const menuHTML = `
        <div id="custom-dropdown-menu" class="dropdown dropdown-end relative">
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

  // Ajouter les styles CSS
  const style = document.createElement("style");
  style.innerHTML = `
        .menu-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            color: white;
            padding: 16px;
            font-size: 14px;
            height: 108px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            background: linear-gradient(to bottom right, #33203A, #231C40);
            transition: background 0.3s;
        }
        .menu-item:hover {
            background: linear-gradient(to bottom right, #3D2329, #202245);
        }
        .hidden {
            display: none;
        }
    `;
  document.head.appendChild(style);

  // Insérer le menu dans le DOM
  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("beforeend", menuHTML);

    // Récupérer les éléments
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownContent = document.getElementById("dropdown-content");

    // Ajouter l'événement pour afficher/masquer le menu
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
  });
})();
