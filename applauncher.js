(function () {
  function waitForElement(selector, callback, interval = 50, timeout = 5000) {
    const startTime = Date.now();

    const checkExist = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(checkExist);
        callback(element);
      }
      if (Date.now() - startTime > timeout) {
        clearInterval(checkExist);
      }
    }, interval);
  }

  waitForElement("#TheGraphAppLauncher", function (targetDiv) {
    const styleId = "applauncher-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
                #TheGraphAppLauncher {
                    position: relative;
                    display: inline-block;
                }

                #thegraph-dropdown-toggle {
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

                #thegraph-dropdown-toggle:hover {
                    background-color: #3737b6;
                }

                .icon-logo img {
                    width: 16px;
                    height: 16px;
                }

                #thegraph-dropdown-content {
                    display: none;
                    position: absolute;
                    right: 0;
                    width: 335px;
                    background: #161426;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 8px;
                    overflow: hidden;
                    grid-template-columns: repeat(2, 1fr);
                    margin-top: 8px;
                }

                #thegraph-dropdown-content.show {
                    display: grid;
                }

                .thegraph-menu-item {
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

                .thegraph-menu-item.gradient-1:hover {
                    background: linear-gradient(to bottom right, #33203A, #231C40);
                }

                .thegraph-menu-item.gradient-2:hover {
                    background: linear-gradient(to bottom right, #33203A, #231C40);
                }

                .thegraph-menu-item.gradient-3:hover {
                    background: linear-gradient(to bottom right, #2B2C50, #1B1646);
                }

                .thegraph-menu-item.gradient-4:hover {
                    background: linear-gradient(to bottom right, #3D2329, #202245);
                }

                .thegraph-menu-item img {
                    width: 32px;
                    height: 32px;
                }
            `;
      document.head.appendChild(style);
    }

    targetDiv.innerHTML = `
            <div>
                <label id="thegraph-dropdown-toggle" tabindex="0">
                    <span class="icon-logo">
                        <img src="https://thegraph.market/images/TheGraph_logo.svg" alt="The Graph logo" />
                    </span>
                    <span>Apps</span>
                </label>
                <ul id="thegraph-dropdown-content">
                    <li>
                        <a href="https://thegraph.com/studio/" target="_blank" class="thegraph-menu-item gradient-1">
                            <img src="https://thegraph.market/images/app-launcher/subgraph.svg" alt="Subgraph Studio logo" />
                            <p>Subgraph Studio</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://thegraph.com/explorer" target="_blank" class="thegraph-menu-item gradient-2">
                            <img src="https://thegraph.market/images/app-launcher/graph-explorer.svg" alt="Graph Explorer logo" />
                            <p>Graph Explorer</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://substreams.dev" target="_blank" class="thegraph-menu-item gradient-3">
                            <img src="https://thegraph.market/images/app-launcher/substreams.svg" alt="Substreams logo" />
                            <p>Substreams.dev</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://thegraph.market" target="_blank" class="thegraph-menu-item gradient-4">
                            <img src="https://thegraph.market/images/app-launcher/thegraph-market.svg" alt="The Graph Market logo" />
                            <p>The Graph Market</p>
                        </a>
                    </li>
                </ul>
            </div>
        `;

    const dropdownToggle = targetDiv.querySelector("#thegraph-dropdown-toggle");
    const dropdownContent = targetDiv.querySelector(
      "#thegraph-dropdown-content"
    );

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
})();
