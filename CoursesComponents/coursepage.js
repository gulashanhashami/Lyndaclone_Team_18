function pageAppend() {
  return `<div id="container">
    <div id="language">
      <div class="select-box">
        <div class="selected">Language</div>
        <div class="options-container">
          <div class="option">
            <input
              type="radio"
              id="english"
              class="radio"
              name="language-category"
              value="English"
            />
            <label for="english">English</label>
          </div>
          <div class="option">
            <input
              type="radio"
              id="spanish"
              class="radio"
              name="language-category"
              value="Spanish"
            />
            <label for="spanish">Spanish</label>
          </div>
          <div class="option">
            <input
              type="radio"
              id="chinese"
              class="radio"
              name="language-category"
              value="Simplified Chinese"
            />
            <label for="chinese">Simplified Chinese</label>
          </div>
          <div class="option">
            <input
              type="radio"
              id="portuguese"
              class="radio"
              name="language-category"
              value="Portuguese"
            />
            <label for="portuguese">Portuguese</label>
          </div>
          <div class="option">
            <input
              type="radio"
              id="french"
              class="radio"
              name="language-category"
              value="French"
            />
            <label for="french">French</label>
          </div>
          <div class="buttons">
            <button onclick="languageClose()" id="languageClose">
              cancel
            </button>
            <button onclick="showLanguages()" id="showLanguages">
              show results
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="type">
      <div class="select-box">
        <div class="selected">Type</div>
        <div class="options-container">
          <div class="option">
            <input
              type="checkbox"
              id="courses"
              class="radio"
              name="type"
              value="COURSE"
            />
            <label for="courses">Courses</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="videos"
              class="radio"
              name="type"
              value="VIDEO"
            />
            <label for="videos">Videos</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="audio"
              class="radio"
              name="type"
              value="AUDIO"
            />
            <label for="audio">Audio</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="learning"
              class="radio"
              name="type"
              value="LEARNING PATH"
            />
            <label for="learning">Learning Paths</label>
          </div>
          <div class="buttons">
            <button onclick="typeClose()" id="typeClose">cancel</button>
            <button onclick="showType()" id="showType">show results</button>
          </div>
        </div>
      </div>
    </div>

    <div id="time">
      <div class="select-box">
        <div class="selected">Time to Complete</div>
        <div class="options-container">
          <div class="option">
            <input
              type="checkbox"
              id="10mins"
              class="radio"
              name="type"
              value="600"
            />
            <label for="10mins"> < 10 mins </label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="3omins"
              class="radio"
              name="type"
              value="1800"
            />
            <label for="30mins"> 10 - 30 mins</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="60mins"
              class="radio"
              name="type"
              value="3600"
            />
            <label for="60mins">30 - 60 mins</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="1hr"
              class="radio"
              name="type"
              value="7200"
            />
            <label for="1hr">1 - 2 hours</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="2hr"
              class="radio"
              name="type"
              value="10800"
            />
            <label for="2hr">2 - 3 hours</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="3hr"
              class="radio"
              name="type"
              value="108001"
            />
            <label for="3hr">3+ hours</label>
          </div>
          <div class="buttons">
            <button onclick="timeClose()" id="timeClose">cancel</button>
            <button onclick="showTime()" id="showTime">show results</button>
          </div>
        </div>
      </div>
    </div>

    <div id="level">
      <div class="select-box">
        <div class="selected">Level</div>
        <div class="options-container">
          <div class="option">
            <input
              type="checkbox"
              id="beginner"
              class="radio"
              name="type"
              value="Beginner"
            />
            <label for="beginner">Beginner</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="intermediate"
              class="radio"
              name="type"
              value="Intermediate"
            />
            <label for="intermediate">Intermediate</label>
          </div>
          <div class="option">
            <input
              type="checkbox"
              id="advanced"
              class="radio"
              name="type"
              value="Advanced"
            />
            <label for="advanced">Advanced</label>
          </div>
          <div class="buttons">
            <button onclick="levelClose()" id="levelClose">cancel</button>
            <button onclick="showLevel()" id="showLevel">show results</button>
          </div>
        </div>
      </div>
    </div>

    <div id="all">
      <div class="select-box">
        <div class="selected">All Filters</div>
        <div class="popup">
          <div
            class="close-pop"
            onclick="closeAllFilter()"
            id="closeAllFilter"
          >
            &#10006;
          </div>
          <h1>All Filters</h1>
          <hr />
          <div class="arrange" id="all-language">
            <div class="option">
              <input
                type="radio"
                id="english"
                class="radio"
                name="language-category"
                value="English"
              />
              <label for="english">English</label>
            </div>
            <div class="option">
              <input
                type="radio"
                id="spanish"
                class="radio"
                name="language-category"
                value="Spanish"
              />
              <label for="spanish">Spanish</label>
            </div>
            <div class="option">
              <input
                type="radio"
                id="chinese"
                class="radio"
                name="language-category"
                value="Simplified Chinese"
              />
              <label for="chinese">Simplified Chinese</label>
            </div>
            <div class="option">
              <input
                type="radio"
                id="portuguese"
                class="radio"
                name="language-category"
                value="Portuguese"
              />
              <label for="portuguese">Portuguese</label>
            </div>
            <div class="option">
              <input
                type="radio"
                id="french"
                class="radio"
                name="language-category"
                value="French"
              />
              <label for="french">French</label>
            </div>
          </div>
          <hr />
          <div class="arrange" id="all-type">
            <div class="option">
              <input
                type="checkbox"
                id="courses"
                class="radio"
                name="type"
                value="COURSE"
              />
              <label for="courses">Courses</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="videos"
                class="radio"
                name="type"
                value="VIDEO"
              />
              <label for="videos">Videos</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="audio"
                class="radio"
                name="type"
                value="AUDIO"
              />
              <label for="audio">Audio</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="learning"
                class="radio"
                name="type"
                value="LEARNING PATH"
              />
              <label for="learning">Learning Paths</label>
            </div>
          </div>
          <hr />

          <div class="arrange" id="all-time">
            <div class="option">
              <input
                type="checkbox"
                id="10mins"
                class="radio"
                name="type"
                value="600"
              />
              <label for="10mins"> < 10 mins </label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="3omins"
                class="radio"
                name="type"
                value="1800"
              />
              <label for="30mins"> 10 - 30 mins</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="60mins"
                class="radio"
                name="type"
                value="3600"
              />
              <label for="60mins">30 - 60 mins</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="1hr"
                class="radio"
                name="type"
                value="7200"
              />
              <label for="1hr">1 - 2 hours</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="2hr"
                class="radio"
                name="type"
                value="10800"
              />
              <label for="2hr">2 - 3 hours</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="3hr"
                class="radio"
                name="type"
                value="108001"
              />
              <label for="3hr">3+ hours</label>
            </div>
          </div>
          <hr />
          <div class="arrange" id="all-level">
            <div class="option">
              <input
                type="checkbox"
                id="beginner"
                class="radio"
                name="type"
                value="Beginner"
              />
              <label for="beginner">Beginner</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="intermediate"
                class="radio"
                name="type"
                value="Intermediate"
              />
              <label for="intermediate">Intermediate</label>
            </div>
            <div class="option">
              <input
                type="checkbox"
                id="advanced"
                class="radio"
                name="type"
                value="Advanced"
              />
              <label for="advanced">Advanced</label>
            </div>
          </div>
          <hr />
          <div class="buttons">
            <button onclick="allReset()" id="allReset">Reset</button>
            <button onclick="showAll()" id="showAll">Show results</button>
          </div>
        </div>
      </div>
    </div>

    <div id="reset">
      <button onclick="reset()" id="reset">Reset</button>
    </div>
  </div>
  <hr />

  <div>
    <div id="sort">
      <div id="sortSelected" onclick="openSortOptions()">
        sort by: <span>View Count</span>
      </div>
      <div id="sortOptions">
        <div>
          <input
            type="radio"
            id="bestMatch"
            name="sort"
            value="Best Match"
            onclick="bestmatch()"
          />
          <label for="bestMatch">Best Match</label>
        </div>
        <div>
          <input
            type="radio"
            id="viewCount"
            name="sort"
            value="View Count"
            onclick="viewcount()"
          />
          <label for="viewCount">View Count</label>
        </div>
        <div>
          <input
            type="radio"
            id="newest"
            name="sort"
            value="Newest"
            onclick="newest()"
          />
          <label for="newest">Newest</label>
        </div>
      </div>
    </div>
    <div id="displayProducts"></div>
  </div>`;
}

export { pageAppend };
