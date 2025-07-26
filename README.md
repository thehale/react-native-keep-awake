<div align="center">

# @thehale/react-native-keep-awake

Prevent the phone screen from going to sleep.

<!-- BADGES -->
[![](https://badgen.net/github/license/thehale/git-authorship)](https://github.com/thehale/git-authorship/blob/master/LICENSE)
[![](https://badgen.net/badge/icon/Sponsor/pink?icon=github&label)](https://github.com/sponsors/thehale)
[![Joseph Hale's software engineering blog](https://jhale.dev/badges/website.svg)](https://jhale.dev)
[![](https://jhale.dev/badges/follow.svg)](https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=thehale)
</div>

## Installation


```sh
npm install @thehale/react-native-keep-awake
```

## Compatibility

React Native 0.78.0+ (New Architecture only)


## Usage

There are three different ways you can use this library to keep a screen from going to sleep.

### Add a Component

Any screen that includes the `KeepAwake` component in its tree will not go to sleep.

```tsx
import { KeepAwake } from '@thehale/react-native-keep-awake';

function MyScreen() {
    return (
        <View>
            <KeepAwake />
            <Text>This screen won't go to sleep!</Text>
        </View>
    )
}
```

### Use a Hook

Invoking the `useKeepAwake` hook will prevent that screen from going to sleep.

```tsx
import { useKeepAwake } from '@thehale/react-native-keep-awake';

function MyScreen() {
    useKeepAwake()
    return (
        <View>
            <Text>This screen won't go to sleep!</Text>
        </View>
    )
}
```

### Manual Control

```tsx
import { activate, deactivate } from '@thehale/react-native-keep-awake';

function MyScreen() {
    return (
        <View>
            <Text>Press this button to block the screen from going to sleep</Text>
            <Button title="Activate" onPress={activate} />
            
            <Text>Press this button to allow the screen to sleep/lock</Text>
            <Button title="Deactivate" onPress={deactivate} />
        </View>
    )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
Copyright (c) 2025 Joseph Hale, All Rights Reserved

Provided under the terms of the [Mozilla Public License, version 2.0](./LICENSE)

> [!NOTE]
> This package is a rewrite of [`react-native-keep-awake`](https://github.com/corbt/react-native-keep-awake) and [`@sayem314/react-native-keep-awake`](https://github.com/sayem314/react-native-keep-awake) which are licensed under the MIT license.

<details>

<summary><b>What does the MPL-2.0 license allow/require?</b></summary>

### TL;DR

You can use files from this project in both open source and proprietary
applications, provided you include the above attribution. However, if
you modify any code in this project, or copy blocks of it into your own
code, you must publicly share the resulting files (note, not your whole
program) under the MPL-2.0. The best way to do this is via a Pull
Request back into this project.

If you have any other questions, you may also find Mozilla's [official
FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) for the MPL-2.0 license
insightful.

If you dislike this license, you can contact me about negotiating a paid
contract with different terms.

**Disclaimer:** This TL;DR is just a summary. All legal questions
regarding usage of this project must be handled according to the
official terms specified in the `LICENSE` file.

### Why the MPL-2.0 license?

I believe that an open-source software license should ensure that code
can be used everywhere.

Strict copyleft licenses, like the GPL family of licenses, fail to
fulfill that vision because they only permit code to be used in other
GPL-licensed projects. Permissive licenses, like the MIT and Apache
licenses, allow code to be used everywhere but fail to prevent
proprietary or GPL-licensed projects from limiting access to any
improvements they make.

In contrast, the MPL-2.0 license allows code to be used in any software
project, while ensuring that any improvements remain available for
everyone.

</details>

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
