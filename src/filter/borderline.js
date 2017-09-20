import AlloyImage, {Filter} from "AlloyImage";
class borderline extends Filter{ 
    cname = "查找边缘";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var template1 = [
            -2,-4,-4,-4,-2,
            -4,0,8,0,-4,
            -4,8,24,8,-4,
            -4,0,8,0,-4,
            -2,-4,-4,-4,-2
        ];

        var template2 = [
                0,		1,		0,
                1,		-4,		1,
                0,		1,		0
        ];

        var template3 = [
        ];

        return dorsyMath.applyMatrix({data, width, height}, template2, 250);
    }
}

AlloyImage.addFilter(borderline);
