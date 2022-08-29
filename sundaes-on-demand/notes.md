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
