

/**
 * assertions use an expect method
 * it expects an argument, matcher, and matcher argumet
 */

/**
 * jest-dom, comes with the create-react-app
 * src/setup Tests.sj imports it before each test and makes matchers available
 * DOM-based matchers
 *  ex: toBeVisible() or toBeChecked()
 */

/**
 * RTL helps with:
 * - rendering components into virtual DOM
 * - searching virtual DOM
 * - Interacting with virtual DOM
 * 
 * Needs a test runner:
 * - find tests, run them. make assertions
 * 
 * Jest:
 * - is recommended by Testing Library
 * - comes with create-react-app
 * 
 * npm test runs an npm script that runs Jest in watch mode
 */

/**
 * watchmode
 * 
 * watch for changes in files since last commit
 * Only run tests related to these files
 * No changes? No tests
 * - Type a to run all tests
 */

/**
 * how does Jest work?
 * 
 * global test method has two arguments
 * - string description
 * - test function
 * 
 * Test fails if error is thrown when running function
 * assertiosn thow errors when expectations fails
 * 
 * No error -> tests pass
 * - empty test passes
 */

/**
 * What does RTL Do?
 * 
 * Creates virtual DOM for testing
 * - and utilities for interacting with DOM
 * Allows testing wihout a browser
 */

/**
 * Types of Tests
 * Unit Tests:
 * - Tests one unit of code in isolation
 * Integration tests:
 * - How multiple units work together
 * Functional Tests: 
 * Tests a particular function of software
 * Acceptance / End-to-end (E2E) Tests
 * - Use actual browser and serve (Cypress, Selenium)
 * 
 */

/**
 * Functional Testing
 * different mindest from unit testing
 */

/**
 * Functional Testing
 * different mindset from unit testing
 * include all relevant units, test behavior
 * Close to how users inteact with software 
 * robust tests
 * more difficult to debug failing tests
 */

/**
 * TDD vs BDD
 * Testing Library encourages testing bahavior over implementation
 * BDD is very explicitly defined
 * - involes collaboaration between lots of roles
 *  - developers, TA< business partners, etc.
 * - defines process for different groups to intereact
 */

/**
 * Testing library recommends finding elements by accessibility handles:
 *  https://testing-library.com/docs/queries/about/#priority
 * 
 * create-react-apps' example test uses getByTest
 * - ok for non-interactice elements
 *  - better: getByRole
 * 
 * Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions
 * - some elements have built-in roles: button, a
 */

 