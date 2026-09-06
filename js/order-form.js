(function () {
  var PRICE_ITEMS = {
    "api-basic": [
      {
        title: "던지기",
        desc: "캐릭터에게 물건을 던질 수 있습니다.",
        price: "10,000",
        vts: true
      },
      {
        title: "물맞기",
        desc: "캐릭터에게 물을 쏠 수 있습니다.",
        price: "15,000"
      },
      {
        title: "날아가기",
        desc: "캐릭터가 물건을 맞고 멀리 날아갑니다.",
        price: "15,000"
      },
      {
        title: "붙이기",
        desc: "원하는 물건이 날아와 캐릭터의 몸에 달라붙습니다.",
        price: "20,000"
      },
      {
        title: "쓰다듬기",
        desc: "캐릭터의 머리를 쓰다듬어줍니다.",
        price: "20,000",
        vts: true
      },
      {
        title: "머리쾅 (떨어지기)",
        desc: "하늘에서 떨어진 PROP이 캐릭터의 머리를 강타합니다.",
        price: "20,000"
      },
      {
        title: "머리쾅 (망치)",
        desc: "망치로 캐릭터의 머리를 강타합니다.",
        price: "20,000",
        vts: true
      },
      {
        title: "와르르",
        desc: "캐릭터에게 물건들이 쏟아집니다.",
        price: "20,000",
        vts: true
      },
      {
        title: "윙크",
        desc: "캐릭터가 한쪽 눈을 감을 경우, 자동으로 눈가에 하트 파티클이 출력됩니다.",
        price: "20,000",
        vts: true
      },
      {
        title: "자동 잠자기",
        desc: "자리를 비우면 캐릭터가 잠드는 모션을 취합니다.",
        price: "20,000"
      },
      {
        title: "물음표",
        desc: "시청자의 ? 채팅에 반응해 화면에 물음표를 띄웁니다.",
        price: "15,000",
        vts: true
      }
    ],
    "api-custom": [
      {
        title: "마법",
        desc: "캐릭터의 손에서 마법이 나갑니다.",
        price: "30,000"
      },
      {
        title: "팬 캐릭터 뽀뽀",
        desc: "팬 캐릭터가 다가가 캐릭터의 몸 한 부위에 입술자국을 남깁니다.",
        price: "50,000"
      },
      {
        title: "천사 / 악마 변신",
        desc: "캐릭터가 날개를 달며 날아오릅니다. 날개 종류를 바꾸거나 뿔, 헤일로를 추가할 수 있습니다.",
        price: "50,000"
      },
      {
        title: "팬 캐릭터 따라다니기",
        desc: "팬 캐릭터가 따라다니게 할 수 있는 기능입니다.",
        price: "10,000"
      },
      {
        title: "시청자 던지기",
        desc: "도네이션을 한 시청자의 이름이 던지기 프랍에 들어갑니다.",
        price: "50,000"
      }
    ],
    "prop-production": [
      {
        title: "팬캐릭터 제작",
        desc: "와루도에서 상호작용 가능한 단순한 팬 캐릭터를 제작해 드립니다.",
        price: "50,000"
      },
      {
        title: "PROP 제작",
        desc: "와루도에서 상호작용 가능한 독창적인 소품을 제작해 드립니다.",
        price: "30,000"
      },
      {
        title: "PROP 제작",
        desc: "상호작용 가능한 로우폴리 소품을 제작해 드립니다.",
        price: "20,000",
        vtsOnly: true
      }
    ]
  };

  var ORDER_CONFIG = {
    privateFee: 20000,
    privateLabel: "비공개 (+20,000원)",
    platforms: [
      { id: "soop", label: "SOOP(숲)" },
      { id: "chzzk", label: "치지직" },
      { id: "toonation", label: "투네이션" }
    ],
    platformOtherPlaceholder: "플랫폼 입력",
    warudoVersions: [
      { id: "standard", label: "와루도 일반", default: true },
      { id: "pro", label: "Warudo PRO" }
    ],
    setupMethods: [
      { id: "remote", label: "원격 세팅 (초보자)" },
      { id: "file", label: "파일 전달 (숙련자)" }
    ],
    categories: [
      { key: "api-basic", label: "기본 API" },
      { key: "api-custom", label: "커스텀 API" },
      { key: "prop-production", label: "PROP 제작" }
    ]
  };

  var form = document.getElementById("order-form");
  var preview = document.getElementById("order-preview");
  var copyBtn = document.getElementById("order-copy");
  var platformTabs = document.getElementById("orderPlatformTabs");
  if (!form || !preview) return;

  var orderPlatform = "warudo";

  function vtsAdjustedPrice(item) {
    if (orderPlatform !== "vts" || !item.vts) return item.price;
    var n = parseAmount(item.price);
    return (n + 10000).toLocaleString("ko-KR");
  }

  function getPlatformEntries(categoryKey) {
    var items = PRICE_ITEMS[categoryKey] || [];
    var entries = items.map(function (item, idx) { return { item: item, idx: idx }; });
    if (categoryKey === "prop-production") {
      return entries.filter(function (e) { return orderPlatform === "vts" ? !!e.item.vtsOnly : !e.item.vtsOnly; });
    }
    if (orderPlatform !== "vts") return entries;
    if (categoryKey === "api-basic") return entries.filter(function (e) { return e.item.vts; });
    if (categoryKey === "api-custom") return [];
    return entries;
  }

  function parseAmount(text) {
    if (!text) return 0;
    var match = String(text).match(/([\d,]+)/);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  }

  function formatWon(amount) {
    return amount.toLocaleString("ko-KR") + "원";
  }

  function hasVariableEstimate(selectedApis) {
    return selectedApis.some(function (entry) {
      var price = entry.item && entry.item.price;
      return String(price || "").includes("문의");
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function createField(label, html) {
    return (
      '<div class="order-field">' +
        '<span class="order-label">' + escapeHtml(label) + "</span>" +
        html +
      "</div>"
    );
  }

  function createRadioGroup(name, items) {
    var defaultId = (items.find(function (item) { return item.default; }) || items[0]).id;
    return (
      '<div class="order-choice-group">' +
        items.map(function (item) {
          return (
            '<label class="order-choice">' +
              '<input type="radio" name="' + name + '" value="' + item.id + '"' +
              (item.id === defaultId ? " checked" : "") + ">" +
              "<span>" + escapeHtml(item.label) + "</span>" +
            "</label>"
          );
        }).join("") +
      "</div>"
    );
  }

  function createCheckbox(name, value, label, extraClass) {
    return (
      '<label class="order-choice' + (extraClass ? " " + extraClass : "") + '">' +
        '<input type="checkbox" name="' + name + '" value="' + escapeHtml(value) + '">' +
        "<span>" + escapeHtml(label) + "</span>" +
      "</label>"
    );
  }

  function formatOrderPrice(price) {
    if (!price) return "문의";
    var text = String(price);
    if (text.includes("문의")) return text;
    if (!/[\d]/.test(text)) return text;
    return text.replace(/~$/, "") + "원";
  }

  function getApiAmount(entry) {
    var item = entry.item;
    if (!item || String(item.price || "").includes("문의")) return 0;
    var unit = parseAmount(vtsAdjustedPrice(item));
    if (item.perVariantPricing && item.variants && item.variants.length) {
      return unit * (entry.variants ? entry.variants.length : 0);
    }
    return unit;
  }

  function createQuantityControl(inputName) {
    return (
      '<div class="order-quantity-control">' +
        '<button type="button" class="order-qty-btn" data-qty-target="' + inputName + '" data-qty-step="-1" aria-label="수량 줄이기">−</button>' +
        '<input class="order-qty-input" type="number" name="' + inputName + '" min="0" max="99" value="0" inputmode="numeric">' +
        '<button type="button" class="order-qty-btn" data-qty-target="' + inputName + '" data-qty-step="1" aria-label="수량 늘리기">+</button>' +
      "</div>"
    );
  }

  function createVariantOptions(apiId, variants) {
    if (!variants || !variants.length) return "";
    return (
      '<div class="order-api-options" data-api-variants="' + apiId + '" hidden>' +
        '<p class="order-api-options-label">타입</p>' +
        '<div class="order-variant-list">' +
          variants.map(function (variant, variantIndex) {
            var displayLabel = variant.label || variant.desc || "";
            return (
              '<label class="order-variant-choice">' +
                '<input type="checkbox" name="variant-' + apiId + '" value="' + variantIndex + '">' +
                '<span class="order-variant-body">' +
                  (variant.label
                    ? '<span class="order-variant-label">' + escapeHtml(variant.label) + "</span>" +
                      (variant.desc ? '<span class="order-variant-desc">' + escapeHtml(variant.desc) + "</span>" : "")
                    : '<span class="order-variant-label">' + escapeHtml(displayLabel) + "</span>") +
                "</span>" +
              "</label>"
            );
          }).join("") +
        "</div>" +
      "</div>"
    );
  }

  function createApiBlock(categoryKey, categoryLabel, entries) {
    if (!entries.length) return "";
    var blocks = entries.map(function (entry) {
      var item = entry.item;
      var index = entry.idx;
      var apiId = categoryKey + "-" + index;
      return (
        '<div class="order-api-item">' +
          '<label class="order-api-head">' +
            '<input type="checkbox" class="order-api-toggle" name="api" value="' + apiId + '" ' +
              'data-category="' + categoryKey + '" data-index="' + index + '"' +
              (item.variants && item.variants.length ? ' data-has-variants="true"' : "") + ">" +
            '<span class="order-api-info">' +
              '<span class="order-api-name">' + escapeHtml(item.title) + "</span>" +
              (item.desc ? '<span class="order-api-desc">' + escapeHtml(item.desc) + "</span>" : "") +
            "</span>" +
            '<span class="order-api-price">' + escapeHtml(formatOrderPrice(vtsAdjustedPrice(item))) + "</span>" +
          "</label>" +
          createVariantOptions(apiId, item.variants) +
        "</div>"
      );
    }).join("");
    return (
      '<section class="order-section">' +
        '<h3 class="order-section-title">' + escapeHtml(categoryLabel) + "</h3>" +
        '<div class="order-api-list">' + blocks + "</div>" +
      "</section>"
    );
  }

  function buildForm() {
    var cfg = ORDER_CONFIG;
    var apiSections = cfg.categories.map(function (cat) {
      return createApiBlock(cat.key, cat.label, getPlatformEntries(cat.key));
    }).join("");

    form.innerHTML =
      '<section class="order-section">' +
        '<h3 class="order-section-title">기본 정보</h3>' +
        (orderPlatform === "vts" ? "" : createField("Warudo 버전", createRadioGroup("warudo", cfg.warudoVersions))) +
        createField(
          "방송 플랫폼",
          '<div class="order-platform-field">' +
            '<div class="order-choice-group order-choice-group--wrap order-choice-group--platform">' +
              cfg.platforms.map(function (platform) {
                return createCheckbox("platform", platform.id, platform.label);
              }).join("") +
              '<label class="order-choice order-choice--platform-other">' +
                '<input type="checkbox" name="platform-other-toggle" value="other">' +
                "<span>기타</span>" +
              "</label>" +
              '<input class="order-input order-platform-other" type="text" name="platform-other" placeholder="' +
                escapeHtml(cfg.platformOtherPlaceholder) +
              '" disabled>' +
            "</div>" +
          "</div>"
        ) +
        createField("세팅 방식", createRadioGroup("setup", cfg.setupMethods)) +
      "</section>" +
      apiSections +
      '<section class="order-section">' +
        '<h3 class="order-section-title">추가 옵션</h3>' +
        '<div class="order-choice-group">' +
          createCheckbox("private", "yes", cfg.privateLabel, "order-choice--accent") +
        "</div>" +
        createField(
          "요청사항",
          '<textarea class="order-textarea" name="note" rows="4" placeholder="원하시는 연출, 일정, 참고 자료 등"></textarea>'
        ) +
      "</section>";
  }

  function getCheckedLabels(name) {
    return Array.prototype.slice
      .call(form.querySelectorAll('input[name="' + name + '"]:checked'))
      .map(function (el) {
        var label = el.closest("label");
        return label ? label.querySelector("span").textContent.trim() : el.value;
      });
  }

  function getRadioLabel(name) {
    var checked = form.querySelector('input[name="' + name + '"]:checked');
    if (!checked) return "";
    var label = checked.closest("label");
    return label ? label.querySelector("span").textContent.trim() : checked.value;
  }

  function getPlatformLabels() {
    var platforms = getCheckedLabels("platform");
    var otherToggle = form.querySelector('input[name="platform-other-toggle"]');
    var otherInput = form.elements["platform-other"];
    if (otherToggle && otherToggle.checked && otherInput) {
      var other = otherInput.value.trim();
      if (other) platforms.push(other);
    }
    return platforms;
  }

  function syncPlatformOtherInput() {
    var otherToggle = form.querySelector('input[name="platform-other-toggle"]');
    var otherInput = form.elements["platform-other"];
    if (!otherToggle || !otherInput) return;
    otherInput.disabled = !otherToggle.checked;
    if (!otherToggle.checked) otherInput.value = "";
  }

  function getSelectedVariants(apiId, item) {
    if (!item.variants || !item.variants.length) return [];
    return Array.prototype.slice
      .call(form.querySelectorAll('input[name="variant-' + apiId + '"]:checked'))
      .map(function (el) {
        return item.variants[parseInt(el.value, 10)];
      })
      .filter(Boolean);
  }

  function getSelectedApis() {
    return Array.prototype.slice.call(form.querySelectorAll(".order-api-toggle:checked")).map(function (el) {
      var category = el.dataset.category;
      var index = parseInt(el.dataset.index, 10);
      var item = (PRICE_ITEMS[category] || [])[index];
      var apiId = category + "-" + index;
      return { category: category, item: item, variants: getSelectedVariants(apiId, item) };
    });
  }

  function calculateEstimate(selectedApis, isPrivate) {
    var total = 0;
    selectedApis.forEach(function (entry) {
      total += getApiAmount(entry);
    });
    if (isPrivate) total += ORDER_CONFIG.privateFee;
    return total;
  }

  function appendOrderEntries(lines, entries) {
    if (!entries.length) {
      lines.push("- (미선택)");
      return;
    }
    entries.forEach(function (entry) {
      var amount = getApiAmount(entry);
      var priceNote = entry.item.perVariantPricing && entry.variants && entry.variants.length
        ? formatWon(amount) + " · " + entry.variants.length + "타입"
        : formatWon(amount);
      lines.push("- " + entry.item.title + " (" + priceNote + ")");
      if (entry.variants && entry.variants.length) {
        entry.variants.forEach(function (variant) {
          lines.push("  · " + (variant.label || variant.desc));
        });
      } else if (entry.item.desc) {
        lines.push("  " + entry.item.desc);
      }
    });
  }

  function buildPreviewText() {
    var note = form.elements.note ? form.elements.note.value.trim() : "";
    var selectedApis = getSelectedApis();
    var apiEntries = selectedApis.filter(function (entry) {
      return entry.category === "api-basic" || entry.category === "api-custom";
    });
    var propEntries = selectedApis.filter(function (entry) {
      return entry.category === "prop-production";
    });
    var isPrivate = form.querySelector('input[name="private"]:checked');
    var lines = ["[Rabbi API 주문서]", ""];

    lines.push("■ 엔진: " + (orderPlatform === "vts" ? "VTube Studio" : "Warudo"));
    if (orderPlatform !== "vts") lines.push("■ Warudo: " + getRadioLabel("warudo"));
    lines.push("■ 플랫폼: " + (getPlatformLabels().join(", ") || "(미선택)"));
    lines.push("■ 세팅: " + getRadioLabel("setup"));
    lines.push("■ 비공개: " + (isPrivate ? "예 (+20,000원)" : "아니오"));
    lines.push("");
    lines.push("■ 신청 API");
    appendOrderEntries(lines, apiEntries);

    if (propEntries.length) {
      lines.push("");
      lines.push("■ PROP 제작");
      appendOrderEntries(lines, propEntries);
    }

    if (note) {
      lines.push("");
      lines.push("■ 요청사항");
      lines.push(note);
    }

    lines.push("");
    lines.push("■ 총 금액: " + formatWon(calculateEstimate(selectedApis, !!isPrivate)) + (hasVariableEstimate(selectedApis) ? " (일부 항목 문의)" : ""));

    return lines.join("\n");
  }

  function updateFormState() {
    syncPlatformOtherInput();

    Array.prototype.forEach.call(form.querySelectorAll(".order-api-toggle"), function (toggle) {
      var variantBox = form.querySelector('[data-api-variants="' + toggle.value + '"]');
      if (!variantBox) return;
      variantBox.hidden = !toggle.checked;
      if (!toggle.checked) {
        Array.prototype.forEach.call(variantBox.querySelectorAll('input[type="checkbox"]'), function (input) {
          input.checked = false;
        });
      }
    });

    preview.value = buildPreviewText();
    if (window.sendHeight) window.sendHeight();
  }

  function copyOrderText(done) {
    var text = preview.value;
    if (!text) { if (done) done(false); return; }
    function finish(ok) { if (done) done(ok !== false); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { finish(true); }).catch(function () {
        preview.select();
        try { document.execCommand("copy"); finish(true); } catch (e) { finish(false); }
      });
      return;
    }
    preview.select();
    try { document.execCommand("copy"); finish(true); } catch (e) { finish(false); }
  }

  function flashButton(btn, message, restore) {
    var prev = btn.textContent;
    btn.textContent = message;
    setTimeout(function () {
      btn.textContent = typeof restore === "function" ? restore() : (restore || prev);
    }, 1800);
  }

  form.addEventListener("change", updateFormState);
  form.addEventListener("input", updateFormState);
  form.addEventListener("click", function (event) {
    var btn = event.target.closest(".order-qty-btn");
    if (!btn) return;
    event.preventDefault();
    var input = form.querySelector('[name="' + btn.dataset.qtyTarget + '"]');
    if (!input) return;
    var min = parseInt(input.min, 10) || 0;
    var max = parseInt(input.max, 10) || 99;
    var step = parseInt(btn.dataset.qtyStep, 10) || 0;
    input.value = String(Math.min(max, Math.max(min, (parseInt(input.value, 10) || 0) + step)));
    updateFormState();
  });

  copyBtn.addEventListener("click", function () {
    copyOrderText(function () {
      flashButton(copyBtn, "복사 완료!", "주문서 복사");
    });
  });

  if (platformTabs) {
    Array.prototype.forEach.call(platformTabs.querySelectorAll(".order-platform-tab"), function (btn) {
      btn.addEventListener("click", function () {
        if (btn.dataset.orderPlatform === orderPlatform) return;
        Array.prototype.forEach.call(platformTabs.querySelectorAll(".order-platform-tab"), function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        orderPlatform = btn.dataset.orderPlatform;
        buildForm();
        updateFormState();
      });
    });
  }

  buildForm();
  updateFormState();
})();
