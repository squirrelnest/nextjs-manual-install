'use client'

export const ButtonDiv = ({
        text, url
    }: {
        text: string;
        url: string;
    }) => {
    return (
      <a href={url} target="_blank">
        <div role="button" className="btn">
          {text}
        </div>
      </a>
    )
};

export const ButtonInput = ({
        text, url
    }: {
        text: string;
        url: string;
    }) => {
    return (
        <input type="button" className="btn" value="next" onClick={() => window.alert("yay")} />
    )
};

export const ButtonAnchor = ({
    text, url
}: {
    text: string;
    url: string;
}) => {
return (
    <a href="#posts">
        <div role="button" className="btn">
            {text}
        </div>
    </a>
)
};