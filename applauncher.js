document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("TheGraphAppLauncher");

  const styleId = "applauncher-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
            #TheGraphAppLauncher {
                position: relative;
                display: inline-block;
            }

            #dropdown-toggle {
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: center;
                color: white;
                height: 36px;
                padding: 0 12px;
                background-color: #4a4adf;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.3s;
                outline: none;
                border: none;
            }

            #dropdown-toggle:hover {
                background-color: #3737b6;
            }

            .icon-menu i {
                width: 16px;
                height: 16px;
            }

            .icon-logo img {
                width: 16px;
                height: 16px;
            }

            #dropdown-content {
                display: none;
                position: absolute;
                right: 0;
                width: 335px;
                background: #161426;
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                overflow: hidden;
                grid-template-columns: repeat(2, 1fr);
            }

            #dropdown-content.show {
                display: grid;
            }

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
                transition: background 0.3s;
            }

            .menu-item:hover {
                background: linear-gradient(to bottom right, #3D2329, #202245);
            }

            .menu-item img {
                width: 32px;
                height: 32px;
            }
        `;
    document.head.appendChild(style);
  }

  targetDiv.innerHTML = `
        <div>
            <label id="dropdown-toggle" tabindex="0">
                <span class="icon-menu">
                    <i data-lucide="grip"></i>
                </span>
                <span class="icon-logo hidden">
                    <img src="https://thegraph.market/images/TheGraph_logo.svg" alt="The Graph logo" />
                </span>
                <span>Apps</span>
            </label>
            <ul id="dropdown-content">
                <li>
                    <a href="https://thegraph.com/studio/" target="_blank" class="menu-item">
                        <img src="https://thegraph.market/images/app-launcher/subgraph.svg" alt="Subgraph Studio logo" />
                        <p>Subgraph Studio</p>
                    </a>
                </li>
                <li>
                    <a href="https://thegraph.com/explorer" target="_blank" class="menu-item">
                        <img src="https://thegraph.market/images/app-launcher/graph-explorer.svg" alt="Graph Explorer logo" />
                        <p>Graph Explorer</p>
                    </a>
                </li>
                <li>
                    <a href="https://substreams.dev" target="_blank" class="menu-item">
                        <img src="https://thegraph.market/images/app-launcher/substreams.svg" alt="Substreams logo" />
                        <p>Substreams.dev</p>
                    </a>
                </li>
                <li>
                    <a href="https://thegraph.market" target="_blank" class="menu-item">
                        <img src="https://thegraph.market/images/app-launcher/thegraph-market.svg" alt="The Graph Market logo" />
                        <p>The Graph Market</p>
                    </a>
                </li>
            </ul>
        </div>
    `;

  const dropdownToggle = targetDiv.querySelector("#dropdown-toggle");
  const dropdownContent = targetDiv.querySelector("#dropdown-content");

  dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});
