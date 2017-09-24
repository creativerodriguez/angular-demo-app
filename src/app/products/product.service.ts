export class ProductService{
    getProducts() {
            return [
            { 
                imageUrl: "//thumb1.shutterstock.com/display_pic_with_logo/877597/153416570/stock-vector-business-infographics-circle-origami-style-vector-illustration-can-be-used-for-workflow-layout-153416570.jpg",
                productName: "Product 1",
                releasedDate: new Date(2016,5,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 4,
                numOfReviews: 2
            },
            { 
                imageUrl: "//thumb1.shutterstock.com/display_pic_with_logo/877597/153416570/stock-vector-business-infographics-circle-origami-style-vector-illustration-can-be-used-for-workflow-layout-153416570.jpg",
                productName: "Product 2",
                releasedDate: new Date(2016,10,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 2,
                numOfReviews: 12          
            },
            {                 
                imageUrl: "//thumb1.shutterstock.com/display_pic_with_logo/877597/153416570/stock-vector-business-infographics-circle-origami-style-vector-illustration-can-be-used-for-workflow-layout-153416570.jpg",
                productName: "Product 3",
                releasedDate: new Date(2016,7,30),
                description: "Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe. Text truncated within a custom pipe with the class of TruncatePipe.",        
                rating: 5,
                numOfReviews: 2
            }];
        }    
}