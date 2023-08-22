export const QUIZ = [
  {
    id: "1",
    title: "Using states",
    level: 1,
    questions: [
      {
        title:
          "Hooks are a way of working with functions in React instead of classes. useState and useEffect are examples of well-used hooks. However, it is not yet possible to create our own hooks.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title:
          "Immutability in React is crucial because if we directly mutate the value of a state instead of replacing it with a new value, a proper re-rendering of your component does not occur correctly.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title: "About rendering in React, select the incorrect alternative:",
        alternatives: [
          "There are two common cases in which a React component is rendered: the initial rendering of the component and state updates.",
          "Re-renderings typically don't recreate all components like the initial rendering",
          "An update to a state of a parent component can cause the re-rendering of a nested child component.",
          "React doesn't follow a defined flow when rendering a screen, and the steps of the process can vary considerably.",
        ],
        correct: 0,
      },
    ],
  },
  {
    id: "2",
    title: "Using Typescript",
    level: 2,
    questions: [
      {
        title:
          "at type of assignment is this variable: `const fullName: string = 'Dylan Israel';`?",
        alternatives: ["Explicit", "Implicit"],
        correct: 0,
      },
      {
        title: "What is the type of `const exemplo = ['Dylan']`?",
        alternatives: ["unknown[]", "string", "string[]", "any[]"],
        correct: 2,
      },
      {
        title:
          "keyof can be used with index signatures to extract the index type.",
        alternatives: ["True", "False"],
        correct: 0,
      },
    ],
  },
  {
    id: "3",
    title: "React Navigation",
    level: 2,
    questions: [
      {
        title: "What is the best description to identify the Stack Navigator?",
        alternatives: [
          "Adds a fixed menu at the bottom of the device, making it easier to access frequently used screens.",
          "When opening a new screen, the new screen is placed at the top of the navigation stack, and when going back, screens are removed from this stack.",
          "Adds a side menu, occupying the full height of the device. Initially, this menu is hidden and can be opened by dragging the screen.",
        ],
        correct: 1,
      },
      {
        title:
          "When typing routes, you have the advantage that during navigation, you know whether a route receives parameters or not, and what the format of the parameters is.",
        alternatives: ["True.", "False"],
        correct: 0,
      },
      {
        title: "Regarding NavigationContainer, it is correct to say that:",
        alternatives: [
          'The NavigationContainer is the component in which we create a route in the application, passing the "name" and "component" properties to it.',
          'The NavigationContainer is a "hook" exported from within the React Navigation that allows us to access functions like "navigate" and "goBack".',
          "The NavigationContainer is a context that shares with our application all routes and navigation properties.",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: "4",
    title: "Styled Components",
    level: 3,
    questions: [
      {
        title:
          "CSS-in-JS is the styling strategy in which JavaScript is used to style components.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title:
          "Select the option below that does not correspond to a characteristic of Styled Components.",
        alternatives: [
          "Performing the default import of styled and using it to create components (e.g., styled.View).",
          "It's possible to both create predefined styled components using 'styled.' and pass custom components to it using styled().",
          "The way of styling components is quite similar to what we use when working directly with CSS (lowercase letters, hyphen-separated, and ending with a semicolon).",
          "It's possible to customize only the styling of components (style prop) via styled, meaning it's not possible to configure other properties/attributes of the component.",
        ],
        correct: 1,
      },
      {
        title:
          "With Styled Components, it's possible to isolate the component's structure from its styling.",
        alternatives: ["True", "False"],
        correct: 0,
      },
    ],
  },
  {
    id: "5",
    title: "Local Storage",
    level: 2,
    questions: [
      {
        title:
          "Which of the following methods saves information in AsyncStorage?",
        alternatives: [
          "AsyncStorage.removeItem",
          "AsyncStorage.setItem",
          "AsyncStorage.getItem",
        ],
        correct: 1,
      },
      {
        title: "What best describes PropDrilling?",
        alternatives: [
          "Strategy where you pass properties between components until you reach the desired component.",
          "Strategy where you save information locally on the device (storage) and access it when needed.",
          "Strategy where you share information between components through contexts (Context API).",
        ],
        correct: 1,
      },
      {
        title: "What is the correct way to save objects in AsyncStorage?",
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: "6",
    title: "React Native",
    level: 1,
    questions: [
      {
        title: "Select the correct option about React Native:",
        alternatives: [
          "React Native is a JavaScript framework based on React that can create applications only for Android and iOS.",
          "Unlike React, React Native is built entirely by the community and has no affiliation with Facebook.",
          "With React Native, you can maintain almost your entire application using JavaScript and manipulate native code when necessary.",
          "Despite the prominence of ReactJS on the web, React Native is not widely used in the current job market in the mobile development field.",
        ],
        correct: 2,
      },
      {
        title: "Select the incorrect option about React Native CLI and Expo",
        alternatives: [
          "Both with React Native CLI and Expo, it is possible to create applications for iOS and Android.",
          'React Native CLI is the more "barebones" way to create a React Native project. On the other hand, Expo builds on top of this foundation and provides more features, such as Expo Go.',
          "With Expo, you can test iOS applications using Expo Go even if you have a physical iOS device without needing a macOS system, which is not possible with React Native CLI.",
          "The official React Native documentation recommends only using React Native CLI and doesn't even mention Expo.",
        ],
        correct: 3,
      },
      {
        title: "Regarding Expo, select the correct option:",
        alternatives: [
          "Expo has two traditional paths when creating a project: Managed Workflow and Bare Workflow.",
          "Managed Workflow is the way to create projects where you have access to your native code right from the start.",
          "With Bare Workflow, you cannot use Expo Go at any point.",
          "The configuration of the React Native environment for Managed Workflow is more complex than for Bare Workflow",
        ],
        correct: 3,
      },
      {
        title:
          "Regarding componentization in React Native, select the incorrect option:",
        alternatives: [
          "Componentization is a way to reuse code snippets in various parts of your code.",
          "One of the advantages of componentization is simplifying a highly complex component into multiple smaller components, thereby easing code maintenance.",
          "Despite aiding in code reuse and simplification, componentization does not reduce project productivity and readability.",
          "None of the options is correct.",
        ],
        correct: 3,
      },
    ],
  },
];
