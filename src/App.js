import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";

const useStyles = createStyles(theme => ({
  root: {
    display: "grid",
    placeItems: "center",
    height: "80vh",
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src="https://res.cloudinary.com/eujin03/image/upload/v1648669741/image_byzqax_lt2xzl.png"
          alt="404 image"
          className={classes.mobileImage}
          withPlaceholder
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact TP061195@mail.apu.edu.my.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            component="a"
            href="https://tuition-system-spis.herokuapp.com/"
            rel="noopener noreferrer"
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src="https://res.cloudinary.com/eujin03/image/upload/v1648669741/image_byzqax_lt2xzl.png"
          alt="404 image"
          withPlaceholder
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
}

export default App;
