ESLINT and prettier are configured for the frontend project as well.
UI framework used is ANTD which is what i prefer when building projects like internal dashboards and tools. And Tailwind is what i use when i need to work on a more unique look and feel and the project is used by a wider audience outside (Same was used in rizek.com home page).
I have added Redux Toolkit as that is a more robust approach of using redux in react based project and does a lot of configurations for you.
Since React does not have any concept of shared services which are available in angular. It's a must to have some sort of state sharing process especially to avoid props drilling and make your code more modular.
Context api I don’t like in general but still has its own use case when the project is relatively small and barely needs state.

