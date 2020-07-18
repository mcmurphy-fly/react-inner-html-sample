# Тестовое задание

+ Необходимо создать react-app приложение с использованием typescript
+ Реализовать компонент InnerContent, который принимает HTML-строку и гидрирует её в React

```ts
interface IProps {
    /**
     * HTML строка
    */
    content: string;
    
    /**
     * название тэга для врапера
     * @default "div"
    */
    tagName?: string;
}
```

### Использование

```jsx
<InnerContent
    content={`
        <h1>Hello</h1>
        <p>bla bla <b>bla</b></p>
    `}
    tagName="section"
/>
```

#### на выходе
```html
<section>
    <h1>Hello</h1>
    <p>bla bla <b>bla</b></p>
</section>
```
