import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Title from 'antd/lib/typography/Title';
import * as jetpack from 'fs-jetpack';
import Helmet from 'react-helmet';
import { Editor } from './Editor';
import { SettingsSidebar } from './SettingsSidebar';
import 'antd/dist/antd.dark.less';
import { Footer } from './Footer';
import { ProjectSidebar } from './ProjectSidebar';

const Application = () => {
  //
  // const defaultState = useState
  //

  const foo = jetpack.list(".");

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      </Helmet>
      <AppWrapper>
        <ProjectSidebar />
        <MainContent>
          <Header>
            <Title>Airdrawn Editor</Title>
          </Header>
          <Editor text={text} />
        </MainContent>
        <SettingsSidebar />
        <Footer />
      </AppWrapper>
    </>
  );
};

const AppWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
`;

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 18px);
`;

const Header = styled.section`
  h1 {
    font-family: 'Parisienne', cursive;
    margin-top: 5px;
  }
  display: flex;
  justify-content: center;
  cursor: default;
`;

export default hot(Application);

const text = [
  {
    title: 'Chapter 1',
    content:
      "Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be filled with real words, with thoughts that count, information that has value.\nThe toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.\n\nYou begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order. Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less.\n\nConsider this: You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs. Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can't quite tell right now, but they're unhappy, somehow. A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse.\n\nBut. A big but: Lorem Ipsum is not the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn't have helped, won't help now. It's like saying you're a bad designer, use less bold text, don't use italics in every other paragraph. True enough, but that's not all that it takes to get things back on track."
  },
  {
    title: 'Chapter 2',
    content:
      "Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be filled with real words, with thoughts that count, information that has value.\nThe toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.\n\nYou begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order. Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less.\n\nConsider this: You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs. Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can't quite tell right now, but they're unhappy, somehow. A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse.\n\nBut. A big but: Lorem Ipsum is not the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn't have helped, won't help now. It's like saying you're a bad designer, use less bold text, don't use italics in every other paragraph. True enough, but that's not all that it takes to get things back on track."
  }
];
