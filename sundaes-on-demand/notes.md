- In general it's better to use user-event than fire event

---

## screen Query Methods

### command[All]ByQueryType

#### command

- get: expect element to be in DOM
- query: expect element not to be in DOM
- find: expect element to appear async

#### [All]

- (excluse) expect only one match
- (include) expect more than one match

#### QueryType

- Role (most preferred)
- AltText (images)
- Text (display elements)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

#### Helpful Links

- https://testing-library.com/docs/queries/about/#priority
- https://testing-library.com/docs/react-testing-library/cheatsheet/
- https://testing-library.com/docs/queries/about/

---

### not Wrapped in act(...) warning

- React updated element after test was finished
- Don't want to follow the advice to wrap in act(...)
  - Testing Library already does this for us!
  - https://testing-library.com/docs/preact-testing-library/api/#act
- To remedy this error:
  - Determine what changes after the test is over (async)
  - Account for the change in test by:
    - awaiting the change, and
    - asserting on it
  - More info: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning

---

- userEvent.hover and userEvent.unhover methods
- queryByText to and expect().not.toBeInTheDocument() for element starting out not on page
- async waitForElementToBeRemoved for element that was there and then disappeared
- test not wrated in act(...) warning
  - Determine how component is getting updated async and account for in tests

---

## Mock Service Worker Setup

- npm install msw
- Create handlers
- Crete test server
- Make sure test server listens during all tests
  - reset after each test
